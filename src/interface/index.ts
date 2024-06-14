import { UnknownAction } from "redux";

export interface jobsAction {
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  jobs: job[];
  job : job | {};
  response: unknown;
}

export interface job {
  name: String;
  phone: String;
  addRes: String;
  ingameLol: String;
  wallet: Number;
  id: String;
  todoId: String;
}

export interface JobSlice {
  job: {
    jobs: job[];
  };
}

export interface Fork {
  id: string,
  name : string,
  price: number,
  description : string,
  image : string,
  createdAt? : string,
  updatedAt? : string
}