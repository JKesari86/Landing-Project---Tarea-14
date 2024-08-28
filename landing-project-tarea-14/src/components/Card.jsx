export function Card() {
    return ( 
        <div className="card text-center" >
            <img src="https://www.wayofcats.com/blog/wp-content/uploads/2021/06/TuxedoCatpainting-green-tophat.jpg" className="card-img-top col align-self-center container mt-3" alt="Mila the cat" />
            <div className="card-body px-0">
                <h5 className="card-title">Card title</h5>
                <p className="card-text px-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate unde mollitia, odit obcaecati reiciendis ullam architecto numquam magni dolorem itaque veritatis harum cum dicta dolore at eaque minus ad debitis.</p>
                <hr className="card-divider bg-secondary"></hr>
                <a href="#" className="btn btn-primary">Find out more!</a>
            </div>
        </div>)
}

