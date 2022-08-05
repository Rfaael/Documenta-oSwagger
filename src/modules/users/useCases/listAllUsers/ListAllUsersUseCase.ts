import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const isAdmin = this.usersRepository.findById(user_id);
    //FAZER AS VERIFICAÇOES

    if(!isAdmin) {
      throw {error: "mensagem do erro"}
    }

    //IS ADMIN ??
    if(!isAdmin.admin) {
      throw {error: "mensagem do erro"}
    }

    const allUsers = this.usersRepository.list();

    return allUsers;
  }
}

export { ListAllUsersUseCase };
