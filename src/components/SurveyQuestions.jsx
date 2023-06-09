import { PlusIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import uuid4 from "uuid4";
import QuestionEditor from "./QuestionEditor";

export default function SurveyQuestions({questions, onSurveyUpdate}) {
    const [myQuestions, setMyQuestions] = useState([...questions])
    const addQuestion = (index) => {
        index = index !== undefined ? index : myQuestions.length;
        myQuestions.splice(index, 0, {
            id: uuid4(),
            type: 'text',
            question: '',
            description: '',
            data: {},
        });
        setMyQuestions([...myQuestions]);
    };
    const questionChange = (question) => {
        if (!question) return;
        const newQuestions = myQuestions.map((q) => {
            if (question.id == q.id) {
                return {...question}
            }

            return q;
        })
        setMyQuestions([...newQuestions]);
    };
    const deleteQuestion = (question) => {
        const newQuestions = myQuestions.filter((q) => q.id != question.id);
        setMyQuestions([...newQuestions]);
    };
    useEffect(() => {
        onSurveyUpdate(myQuestions);
    }, [myQuestions]);

    return (
        <>
            <div className="flex justify-between">
                <h3 className="text-2xl font-bold">Questions</h3>
                <button
                    type="button"
                    className="flex items-center text-sm py-1 px-4 rounded-sm text-white bg-gray-600 hover:bg-gray-700"
                    onClick={() => addQuestion() }
                    >
                    <PlusIcon className="w-4 mr-2"/>
                    Add question
                </button>
            </div>
            {
                myQuestions.length ? myQuestions.map((value, index) => (
                    <QuestionEditor
                        key={value.id}
                        index={index}
                        question={value}
                        addQuestion={addQuestion}
                        deleteQuestion={deleteQuestion}
                        questionChange={questionChange}
                    />
                )) :
                <div className="text-gray-400 text-center py-4">
                    You don't have any questions created
                </div>
            }
        </>
    )
}