import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const ifUserExists = this.usersRepository.findById(user_id);

    if(!ifUserExists) {
      throw {error: "Mensagem de erro"};
    }

    const user = this.usersRepository.findById(user_id);

    console.log("RETORNO USER BY ID ===> ", user);

    return user;
  }
}

export { ShowUserProfileUseCase };
