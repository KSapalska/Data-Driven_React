/* export default function Contact(props) { */
    export default function Contact({img, name, phone, email}) {
    return (
        <article className="contact-card">
            <img
                src={img}  /* src={props.img} */
                alt="Photo of Mr. Whiskerson"
            />
            <h3>{name}</h3>  {/* <h3>{props.name}</h3> */}
            <div className="info-group">
                <img
                    src="./images/phone-icon.png"
                    alt="phone icon"
                />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img
                    src="./images/mail-icon.png"
                    alt="mail icon"
                />
                <p>{email}</p>
            </div>
        </article>
    )
}

