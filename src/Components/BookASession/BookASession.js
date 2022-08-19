import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import BookNowButton from "../Layout/BookNowButton";
import * as bookService from '../../services/bookService';

function BookASession() {
    const { user } = useAuthContext();
    const navigate = useNavigate();

    let onBookTraining = (event) => {
        event.preventDefault();

        let formData = new FormData(event.currentTarget);

        console.log(event.currentTarget)

        let type = formData.get('type');
        let hour = formData.get('hour');
        let price = formData.get('price');

        // console.log(hour.value, type.value, price.value);

        bookService.create({
            type,
            hour,
            price
        }, user.accessToken)
            .then(result => {
                navigate('/my-sessions');
            });

    };



    return (

        <section href="/book-a-session" className="schedule section" id="book-a-session">
            <form id="create-form" onClick={onBookTraining} method="GET">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12 col-12 text-center">
                            <h6 data-aos="fade-up">My weekly schedule</h6>

                            <h2 className="text-white" data-aos="fade-up" data-aos-delay="200"> Available Training-hours Timetable</h2>
                        </div>

                        <div className="col-lg-12 py-5 col-md-12 col-12">
                            <section id="create-page" className="create">

                                <table className="table table-bordered table-responsive schedule-table" data-aos="fade-up" data-aos-delay="300">

                                    <tbody>

                                        <tr>
                                            <th><i className="text-white thead-light fa fa-calendar"></i></th>
                                        </tr>

                                        <tr>
                                            <td >
                                                <div>
                                                    <strong id="name" name="type" value="type">{user.type}</strong>
                                                    <span id="hour" name="hour" value="hour">{user.hour}</span>
                                                    <span id="price" name="price" value="price">{user.price}</span>
                                                    <BookNowButton />
                                                    {/* <button className='custom-btn hover focus bg-color book-a-session' >Book now</button> */}
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>

                                </table>

                            </section>

                        </div>

                    </div>
                </div>
            </form>
        </section >

    );

};

export default BookASession;