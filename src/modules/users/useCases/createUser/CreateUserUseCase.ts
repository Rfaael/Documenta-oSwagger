import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userProfile = {
      name,
      email
    };

    const ifEmailAlredyExists = this.usersRepository.findByEmail(email);


    if(ifEmailAlredyExists) {
      throw {error: "Mensagem de erro"};
    }

    const user = this.usersRepository.create(userProfile);


    return user;
  }
}

export { CreateUserUseCase };
