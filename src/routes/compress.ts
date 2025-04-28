import { Router } from "express";
import { compressImage } from '../controllers/compress';
import { upload } from "../middlewares/uploadMiddleware"

const router = Router();

// Single file upload with field name 'image'
router.post("/compress", upload.single('image'), compressImage);

export default router;
