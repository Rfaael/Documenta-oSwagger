import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

interface IRequest {
  user_id: string;
}

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    
    const {user_id} = request.params;

    try {

      const newUserAdmin = this.turnUserAdminUseCase.execute({ user_id });  
      
      return response.json(newUserAdmin);

    } catch (error) {
      return response.status(404).json(error)
    }  
  }
}

export { TurnUserAdminController };
