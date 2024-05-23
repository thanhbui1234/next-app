export interface jobsAction  {
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    jobs : job[]
}

export interface job {
    "name": String,
    "phone": String,
    "addRes": String,
    "ingameLol": String,
    "wallet": Number,
    "id": String,
    "todoId": String
}

export interface JobSlice  {
    job : {
        jobs : job []
    }
}