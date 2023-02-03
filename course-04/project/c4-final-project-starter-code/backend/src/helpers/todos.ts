import { TodosAccess } from './todoAccess'
import { AttachmentUtils } from './attachmentUtils';
import { TodoItem } from '../models/TodoItem'
import { CreateTodoRequest } from '../requests/CreateTodoRequest'
import { UpdateTodoRequest } from '../requests/UpdateTodoRequest'
import { createLogger } from '../utils/logger'
import * as uuid from 'uuid'
import * as createError from 'http-errors'

// TODO: Implement businessLogic

const uuidv4 = require('uuid/v4');
const todoAccess = new TodosAccess();

export async function getAllTodo(jwtToken: string): Promise<TodoItem[]>{
    const userId = parseUserId(jwtToken);
    return todoAccess.getAllTodo(userId);
} 

export function createTodo(createTodoRequest, jwtToken:string): promise<CreateTodo[]>{
    const userId = parseUserId(jwtToken);
    const todoId = uuidv4();
    const s3BucketName = process.env.s3_BUCKET_NAME;

//     return todoAccess.createTodo({
//          userId: userId,
//          todoId: todoId,
//          attachememtUrl: `https://${s3BucketName}.s3.amazon.com/${todoId}`,
//          createdAt: new Date().getTime().toString(),
//          done: false,
//          ...createTodoRequest,
//   });
// }

// export function updateTodo(updateTodoRequest: UpdateTodoRequest, todoId: string, jwtToken:)

