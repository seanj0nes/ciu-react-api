import React from "react"

const Contacts = ({ contacts }) => {
    return (
        <div>
            <center><h1>Contact List</h1></center>
            <div class="row">
                {contacts.map((contact) => (
                    <div class="col-sm-4">
                        <div class="card border-secondary mb-3" >
                            <img class="card-img-top " src={"https://www.gravatar.com/avatar/94d093eda664addd6e450d7e9881bcad?s=32&amp;d=" + contact.email + "&amp;r=PG"} alt="Contact Detail"></img>
                            <div class="card-body">
                                <h5 class="card-title">{contact.name}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
                                <p class="card-text">{contact.company.catchPhrase}</p>
                            </div>
                            <div class="card-footer">
                                <a href={"https://" + contact.website} class="card-link">Website</a>
                                <a href={"tel: " + contact.phone} class="card-link">Call me</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Contacts