import Card from "./Card";

export default function PostFormCard() {
    return (
        <Card>
            <div className="flex gap-3">
                <img src="" alt=""/>
                <textarea className="grow" placeholder={'whats on your mind, Sharon?'}/>
            </div>
        </Card>
    );
}