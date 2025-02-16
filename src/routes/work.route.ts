import express from "express";
import { deleteWorkById, findWorkById, getALLWork, saveWork, updateWorkbyID } from "../controllers/work.controllers";

const workRoute = express.Router();

workRoute.post('/add', saveWork);
workRoute.get('/all/', getALLWork);
workRoute.get('/find/:id_Work', findWorkById);
workRoute.delete('/delete/:id_Work',deleteWorkById);
workRoute.put('/update/:id_Work',updateWorkbyID);

export default workRoute;