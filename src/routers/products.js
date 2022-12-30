import { Router } from "express";

const router = Router()

router.get("/products", listProducts);
router.post("/products", newProduct);
router.put("/products", addProduct);