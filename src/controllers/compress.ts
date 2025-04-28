// src/controllers/compress.controller.ts
import { Request, Response } from "express";
import sharp from "sharp";

export const compressImage = async (req: Request, res: Response) => {
    try {
        const file = req.file;
        const targetSizeKB = Number(req.body.targetSizeKB);

        if (!file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        if (!targetSizeKB) {
            return res.status(400).json({ message: "Target size is required" });
        }

        // Use sharp to compress
        let quality = 80; // Start quality
        let compressedBuffer = await sharp(file.buffer)
            .jpeg({ quality })
            .toBuffer();

        // Try reducing quality until under target size
        while (compressedBuffer.length / 1024 > targetSizeKB && quality > 10) {
            quality -= 10;
            compressedBuffer = await sharp(file.buffer)
                .jpeg({ quality })
                .toBuffer();
        }

        // Set appropriate headers
        res.set({
            'Content-Type': 'image/jpeg',
            'Content-Disposition': 'attachment; filename=compressed.jpg',
        });

        return res.send(compressedBuffer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Compression failed", error });
    }
};
