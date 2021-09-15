const BASE_URL= "https://db2-auction-game.herokuapp.com/";
// const BASE_URL= "http://127.0.0.1:8000/";

export class API {

    static async wakeUp(body)
    {
        const resp = await fetch(BASE_URL + "api/participant/wake_up/",
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
        return await resp.json();
    }
    
    static async addParticipant(body)
    {
        const resp = await fetch(BASE_URL + "api/participant/add_participant/",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });
        return await resp.json();
    }
    static async filedsParticipant(body)
    {
        const resp = await fetch(BASE_URL + "api/participant/fields_participant/",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });
        return await resp.json();
    }
    static async setPayed(body)
    {
        const resp = await fetch(BASE_URL + "api/participant/set_payed/",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });
        return await resp.json();
    }
    static async openQuiz(body)
    {
        const resp = await fetch(BASE_URL + "api/participant/open_quiz/",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });
        return await resp.json();
    }
    static async load_quiz(body)
    {
        const resp = await fetch(BASE_URL + "api/participant/load_quiz/",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });
        return await resp.json();
    }
    
    
    static async isParticipant(body)
    {
        const resp = await fetch(BASE_URL + "api/participant/is_participant/",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });
        return await resp.json();
    }
    static async passInstructions(body)
    {
        const resp = await fetch(BASE_URL + "api/participant/pass_instructions/",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });
        return await resp.json();
    }
    
    static async updateScore(body)
    {
        const resp = await fetch(BASE_URL + "api/participant/update_score/",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });
        return await resp.json();
    }
        
    static async TrainingRound(body)
    {
        const resp = await fetch(BASE_URL + "api/participant/get_round/",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });
        return await resp.json();
    }
    static async TrainingRoundGame(body)
    {
        const resp = await fetch(BASE_URL + "api/participant/get_round_game/",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });
        return await resp.json();
    }
    static async getTrainingSummary(body)
    {
        const resp = await fetch(BASE_URL + "api/participant/get_training_summary/",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });
        return await resp.json();
    }
    static async getGameSummary(body)
    {
        const resp = await fetch(BASE_URL + "api/participant/get_game_summary/",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });
        return await resp.json();
    }
    static async setTimeOut(body)
    {
        const resp = await fetch(BASE_URL + "api/participant/set_time_out/",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });
        return await resp.json();
    }
    
    static async get_training(body)
    {
        const resp = await fetch(BASE_URL + "api/entry/get_another_training_ent/",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });
        return await resp.json();
    }
    static async get_game(body)
    {
        const resp = await fetch(BASE_URL + "api/entry/get_another_game_ent/",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });
        return await resp.json();
    }
    
    static async get_Yes(body)
    {
        const resp = await fetch(BASE_URL + "api/entry-yes/get_yes/",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });
        return await resp.json();
    }

    static async getBidders(body)
    {
        const resp = await fetch(BASE_URL + "api/entry-yes/get_bidders/",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });
        return await resp.json();
    }

    static async getBiddersNo(body)
    {
        const resp = await fetch(BASE_URL + "api/entry-no/get_bidders/",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });
        return await resp.json();
    }
    static async get_No(body)
    {
        const resp = await fetch(BASE_URL + "api/entry-no/get_no/",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });
        return await resp.json();
    }
    static async postAnswer(body)
    {
        const resp = await fetch(BASE_URL + "api/result/post_answer_training/",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });
        return await resp.json();
    }
    static async postAnswerGame(body)
    {
        const resp = await fetch(BASE_URL + "api/result/post_answer_game/",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });
        return await resp.json();
    }
    static async updateTime(body)
    {
        const resp = await fetch(BASE_URL + "api/result/update_time/",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });
        return await resp.json();
    }
    static async addSurvey(body)
    {
        const resp = await fetch(BASE_URL + "api/survey/add_survey/",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });
        return await resp.json();
    }
}