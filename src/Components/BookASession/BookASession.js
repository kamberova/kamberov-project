import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import BookNowButton from "../Layout/BookNowButton";
import * as bookService from '../../services/bookService';

function BookASession(props) {
    const { user } = useAuthContext();
    const navigate = useNavigate();

    let onBookTraining = (event) => {
        event.preventDefault();

        let formData = new FormData(event.currentTarget.value);

        console.log(event.currentTarget)

        let type = formData.get('type');
        let hour = formData.get('hour');
        let price = formData.get('price');

        console.log(event.currentTarget.value);

        bookService.create({
            type,
            hour,
            price
        }, user.accessToken)
            .then(result => {
                navigate('/my-sessions');
                // console.log(result);
            });

    };



    return (

        <section href="/book-a-session" className="schedule section" id="book-a-session">

            <div className="container">
                <div className="row">

                    <div className="col-lg-12 col-12 text-center">
                        <h6 data-aos="fade-up">My weekly schedule</h6>

                        <h2 className="text-white" data-aos="fade-up" data-aos-delay="200"> Available Training-hours Timetable</h2>
                    </div>



                    <div className="col-lg-12 py-5 col-md-12 col-12">
                        <div>
                            <i className=" fa fa-calendar" data-aos="fade-up" data-aos-delay="200"></i>
                        </div>
                        <section id="create-page" className="create">
                            <form id="create-form" onClick={onBookTraining} method="POST">
                                <div>
                                    <table className="table table-bordered table-responsive schedule-table" data-aos="fade-up" data-aos-delay="300">
                                        <tbody>
                                            <tr>
                                                <td >
                                                    <ul>
                                                        <li>
                                                            <div>
                                                                <h3
                                                                    id="name"
                                                                    name="type"
                                                                    value="type"
                                                                //    onClick={(e) => setType(e.target.value)}
                                                                >
                                                                    Personal Training
                                                                </h3>
                                                                <div
                                                                    id="hour"
                                                                    name="hour"
                                                                    value="hour"
                                                                // onClick={(e) => setHour(e.target.value)}
                                                                >
                                                                    Mon: 7:00am - 9:00am
                                                                </div>
                                                                <div
                                                                    id="price"
                                                                    name="price"
                                                                    value="price"
                                                                >
                                                                    {/* onClick={(e) => setPrice(e.target.value)}  */}
                                                                   Price - 50$
                                                                </div>
                                                                <BookNowButton />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </section>

                    </div >

                </div >
            </div >

        </section >

    );

};

export default BookASession;