import path from 'path';
import multer from 'multer';

const Upload = multer({
    dest: "Uploads/",
    limits: { fileSize: 50 * 1042 * 1024 }, // 50 MB size limit
    storage: multer.diskStorage({
        destination: "Uploads/",
        filename: (_req, file, cb) => {
            cb(null, file.originalname);
        },
    }),
    fileFilter: (_req, file, cb) => {
        let ext = path.extname(file.originalname);

        if (
            ext !== ".jpg" &&
            ext !== ".jpeg" &&
            ext !== ".webp" &&
            ext !== ".png" &&
            ext !== ".mp4"
        ) {
            cb(new Error(`Unsupported file type! ${ext}`), false);
            return;
        }

        cb(null, true);
    },
});

export default Upload;
