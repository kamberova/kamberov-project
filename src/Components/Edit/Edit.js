import { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as bookService from '../../services/bookService';
import useBookingState from '../../hooks/useBookingState';
import { Alert } from 'react-bootstrap';

const types = [
    { value: 'type', text: 'Type' },
    { value: 'hour', text: 'Hour' },
    { value: 'price', text: 'Price' },
]

const Edit = () => {
    const { bookingId } = useParams();
    const [errors, setErrors] = useState({type: false})
    const [book, setBooking] = useBookingState(bookingId);

    const bookingEditSubmitHandler = (e) => {
        e.preventDefault();

        let bookData = Object.fromEntries(new FormData(e.currentTarget))

        bookService.update(book._id, bookData);
    }

    const hourChangeHandler = (e) => {
        let currentHour = e.target.value;
        if (currentHour.length < 3) {
            setErrors(state => ({...state, name: 'Your name sould be at least 3 characters!'}))
        } else if (currentHour.length > 10) {
            setErrors(state => ({...state, name: 'Your name sould be max 10 characters!'}))
        } else {
            setErrors(state => ({...state, name: false}))
        }
    };

    return (
        <section id="edit-page" className="edit">
            <form id="edit-form" method="POST" onSubmit={bookingEditSubmitHandler}>
                <fieldset>
                    <legend>Edit my book</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input" style={{borderColor: errors.name ? 'red' : 'inherit'}}>
                            <input type="text" name="name" id="name" defaultValue={book.name} onChange={hourChangeHandler} />
                        </span>
                        <Alert variant="danger" show={errors.name}>{errors.name}</Alert>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description" id="description" defaultValue={book.description} />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" defaultValue={book.imageUrl} />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type" value={book.type} onChange={(e) => setBooking(s => ({...s, type: e.target.value}))}>
                                {types.map(x => <option key={x.value} value={x.value}>{x.text}</option>)}
                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Save" />
                </fieldset>
            </form>
        </section>
    );
}

export default Edit;