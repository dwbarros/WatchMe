import { memo } from 'react';

import { MovieCard } from '../components/MovieCard';
import '../styles/content.scss';


interface MovieProps {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
        Source: string;
        Value: string;
    }>;
    Runtime: string;
  }

  
function ContentComponent(props: any) {

    return (
        <div className="container">
            <header>
                <span className="category">Categoria:<span> {props.selectedGenre.title}</span></span>
            </header>

            <main>
                <div className="movies-list">
                    {props.movies.map((movie: MovieProps) => (
                        <MovieCard
                            key={movie.imdbID}
                            title={movie.Title}
                            poster={movie.Poster}
                            runtime={movie.Runtime}
                            rating={movie.Ratings[0].Value}
                        />
                    ))}
                </div>
            </main>
        </div>
    )
}

export const Content = memo(ContentComponent, (prevProps, nextProps) => {
    return (
      Object.is(prevProps.movies, nextProps.movies) &&
      Object.is(prevProps.selectedGenre, nextProps.selectedGenre)
    );
  });