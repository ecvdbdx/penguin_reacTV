import React, {Component} from 'react';
import Movie from './../Movie/Movie.jsx';
import './MovieList.scss';

export default class MovieList extends Component {
    constructor(props) {
        super(props);
        this.dataMovies =
            [
                {
                    "poster_path": "/jw9TRNYIMI1KsTjgQ3wVYSMXxlh.jpg",
                    "id": 324857,
                    "title": "Spider-Man : New Generation",
                    "overview": "Spider-Man : New Generation présente Miles Morales, un adolescent vivant à Brooklyn, et révèle les possibilités illimitées du Spider-Verse, un univers où plus d'un peut porter le masque…",
                },
                {
                    "poster_path": "/lXYMJ5YP5hxcCazDtPtCcxsrrQZ.jpg",
                    "id": 315635,
                    "title": "Spider-Man : Homecoming",
                    "overview": "Après ses spectaculaires débuts dans Captain America : Civil War, le jeune Peter Parker découvre peu à peu sa nouvelle identité, celle de Spider-Man, le super-héros lanceur de toile. Galvanisé par son expérience avec les Avengers, Peter rentre chez lui auprès de sa tante May, sous l'œil attentif de son nouveau mentor, Tony Stark. Il s'efforce de reprendre sa vie d'avant, mais au fond de lui, Peter rêve de se prouver qu'il est plus que le sympathique super héros du quartier. L'apparition d'un nouvel ennemi, le Vautour, va mettre en danger tout ce qui compte pour lui...",
                },
                {
                    "poster_path": "/jw9TRNYIMI1KsTjgQ3wVYSMXxlh.jpg",
                    "id": 324857,
                    "title": "Spider-Man : New Generation",
                    "overview": "Spider-Man : New Generation présente Miles Morales, un adolescent vivant à Brooklyn, et révèle les possibilités illimitées du Spider-Verse, un univers où plus d'un peut porter le masque…",
                },
                {
                    "poster_path": "/lXYMJ5YP5hxcCazDtPtCcxsrrQZ.jpg",
                    "id": 315635,
                    "title": "Spider-Man : Homecoming",
                    "overview": "Après ses spectaculaires débuts dans Captain America : Civil War, le jeune Peter Parker découvre peu à peu sa nouvelle identité, celle de Spider-Man, le super-héros lanceur de toile. Galvanisé par son expérience avec les Avengers, Peter rentre chez lui auprès de sa tante May, sous l'œil attentif de son nouveau mentor, Tony Stark. Il s'efforce de reprendre sa vie d'avant, mais au fond de lui, Peter rêve de se prouver qu'il est plus que le sympathique super héros du quartier. L'apparition d'un nouvel ennemi, le Vautour, va mettre en danger tout ce qui compte pour lui...",
                },
                {
                    "poster_path": "/jw9TRNYIMI1KsTjgQ3wVYSMXxlh.jpg",
                    "id": 324857,
                    "title": "Spider-Man : New Generation",
                    "overview": "Spider-Man : New Generation présente Miles Morales, un adolescent vivant à Brooklyn, et révèle les possibilités illimitées du Spider-Verse, un univers où plus d'un peut porter le masque…",
                },
                {
                    "poster_path": "/lXYMJ5YP5hxcCazDtPtCcxsrrQZ.jpg",
                    "id": 315635,
                    "title": "Spider-Man : Homecoming",
                    "overview": "Après ses spectaculaires débuts dans Captain America : Civil War, le jeune Peter Parker découvre peu à peu sa nouvelle identité, celle de Spider-Man, le super-héros lanceur de toile. Galvanisé par son expérience avec les Avengers, Peter rentre chez lui auprès de sa tante May, sous l'œil attentif de son nouveau mentor, Tony Stark. Il s'efforce de reprendre sa vie d'avant, mais au fond de lui, Peter rêve de se prouver qu'il est plus que le sympathique super héros du quartier. L'apparition d'un nouvel ennemi, le Vautour, va mettre en danger tout ce qui compte pour lui...",
                },
                {
                    "poster_path": "/jw9TRNYIMI1KsTjgQ3wVYSMXxlh.jpg",
                    "id": 324857,
                    "title": "Spider-Man : New Generation",
                    "overview": "Spider-Man : New Generation présente Miles Morales, un adolescent vivant à Brooklyn, et révèle les possibilités illimitées du Spider-Verse, un univers où plus d'un peut porter le masque…",
                },
                {
                    "poster_path": "/lXYMJ5YP5hxcCazDtPtCcxsrrQZ.jpg",
                    "id": 315635,
                    "title": "Spider-Man : Homecoming",
                    "overview": "Après ses spectaculaires débuts dans Captain America : Civil War, le jeune Peter Parker découvre peu à peu sa nouvelle identité, celle de Spider-Man, le super-héros lanceur de toile. Galvanisé par son expérience avec les Avengers, Peter rentre chez lui auprès de sa tante May, sous l'œil attentif de son nouveau mentor, Tony Stark. Il s'efforce de reprendre sa vie d'avant, mais au fond de lui, Peter rêve de se prouver qu'il est plus que le sympathique super héros du quartier. L'apparition d'un nouvel ennemi, le Vautour, va mettre en danger tout ce qui compte pour lui...",
                },
            ]
    }

    render() {
        //const list = this.props.movies.map((movie, id) => <Movie {...movie} key={id}/>);
        const list = this.dataMovies.map((movie, id) => <Movie {...movie} key={id}/>);
        return (
            <div className="container">
                <div className="columns is-multiline">
                    {list}
                </div>
            </div>
        )
    }
}