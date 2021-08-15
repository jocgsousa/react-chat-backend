class SendMessageController{
    async store(request, response){
        const {user, text } = request.body;

        response.json({
            messege:'Usuário logado',
            user,
            text
        })
    };


    async post(request, response){
        const {title, text} = request.body;
        return response.json({
            title,
            text
        })
    }
}

export default new SendMessageController();