import Card from "./Cards.js";

export default function PostFormCard() {
    return (
        <Card>
            <div className="flex gap-1">
                <div>
                    <div className="w-12 rounded-full overflow-hidden">
                        <img src="https://static.miraheze.org/allthetropeswiki/0/0b/Girls_und_Panzer_-_Nekonyaa.png" alt="avatar"/>
                    </div>
                </div>
                <textarea className="grow p-3" placeholder={'whats on your mind, Sharon?'}/>
            </div>
        </Card>
    );
}