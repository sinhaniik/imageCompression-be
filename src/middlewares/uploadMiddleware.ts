// src/middlewares/upload.middleware.ts
import multer from "multer";
import path from "path";

// Setting storage to memory (faster, no temp file needed)
const storage = multer.memoryStorage();

// File type filter (optional, safer)
const fileFilter = (req: any, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    const filetypes = /jpeg|jpg|png|webp/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb(new Error("Only images are allowed (jpeg, jpg, png, webp)!"));
    }
};

export const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});
