import  express  from "express";
import { getTasks,createTask,editTask,deleteTask } from "../controller/task.js";
import {verifyToken} from '../middleware/verifyToken.js'

const router = express.Router()

router.get('/tasks', verifyToken, getTasks );
router.post('/createTask', verifyToken, createTask);
router.put('/edit/:id', verifyToken, editTask);
router.delete('/delete/:id', verifyToken, deleteTask);

export default router;