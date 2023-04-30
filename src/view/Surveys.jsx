import PageComponent from "../components/PageComponent";

export default function Surveys() {
    return (
        <PageComponent title="Surveys">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                {surveys}
            </div>
        </PageComponent>
    )
}