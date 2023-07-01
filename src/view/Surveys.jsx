import { PlusCircleIcon } from "@heroicons/react/24/outline";
import TButton from "../components/core/TButton";
import PageComponent from "../components/PageComponent";
import SurveyListItem from "../components/SurveyListItem";
import { useEffect, useState } from "react";

import axiosClient from '../axios.js'
import PaginationLinks from "../components/PaginationLinks";

export default function Surveys() {
    const [surveys, setSurveys] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [meta, setMeta] = useState({});
    const onDeleteClick = () => {
        console.log("dff")
    }

    const onPageClick = (link) => {
        getSurvey(link.url);
    }

    const getSurvey = (url) => {
        url = url || 'survey';
        setIsLoading(true);
        axiosClient.get(url)
        .then(({data}) => {
            console.log(data.data)
            setSurveys(data.data);
            setMeta(data.meta);
            setIsLoading(false);
        })
    }

    useEffect(() => {
        getSurvey();
    }, []);
    return (
        <PageComponent title="Surveys"
            buttons={
                <TButton color="green" to="/surveys/create">
                    <PlusCircleIcon className="h-6 w-6 mr-2" />
                    Create New
                </TButton>
            }
        >
            {isLoading &&
                <div className="text-center text-lg">Loading.....</div>
            }
            {!isLoading &&
                <div>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                        {surveys.map((survey) => (
                            <SurveyListItem
                                survey={survey}
                                key={survey.id}
                                onDeleteClick={onDeleteClick}
                            />
                        ))}
                    </div>
                    <PaginationLinks meta={meta} onPageClick={onPageClick} />
                </div>
            }
        </PageComponent>
    )
}