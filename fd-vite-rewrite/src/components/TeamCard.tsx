interface Props {
    member: {
        name: string;
        position: string;
        image: string;
        phoneNo: string;
    };
}

function TeamCard(props: Props) {
    return (
        <div className="card">
            <div className="image">
                <img src={props.member.image} alt="Chief Coordinator Pic" />
            </div>
            <div className="description">
                <p>{props.member.position}</p>
                <h3 className="name">{props.member.name}</h3>
                <h3>{props.member.phoneNo}</h3>
            </div>
        </div>
    );
}

export default TeamCard;
