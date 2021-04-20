import React, { memo } from "react";

import './style.scss';
import Rating from '../Rating';
import images from '../../public/imgs/*.*';
import mangaList from '../../../mangas.json';

const cardWidget = (manga, index) => {
    const [name, ext] = manga.image.split(".")
    return <>
        <div className='card' key={index}>
            <a target="_blank" href={manga.url}>
                <img src={images[name][ext]} />
            </a>
        </div>
        {/* <div className='tool-tip-card'>
            <div>
                <div className="title">{manga.name}</div>
                <div className="description">{manga.description}</div>
            </div>
        </div> */}
    </>
}
const MangaContainer = (props) => {
    return (
        <>
            <div className='cards'>
                {mangaList.map(cardWidget)}
            </div> 
            <article class="example-article">
                <h1>September 2013 Chart</h1>
                {/* <ol>
                    <li> */}
                        {/* <a href="" title="">Ninetoes - Finder</a> */}
                        <div class="tool-tip card">
                            <i class="tool-tip__icon">i</i>
                            <p class="tool-tip__info">
                                <span class="info"><span class="info__title">Label:</span> Kling Klong</span>
                                <span><span class="info__title">Most popular month:</span> August 2013</span>
                            </p>
                        </div>
                    {/* </li>
                    <li> */}
                        {/* <a href="" title="">Hot Natured feat. Anabel EnglundReverse - Skydiving</a> */}
                        <div class="tool-tip card">
                            <i class="tool-tip__icon">i</i>
                            <p class="tool-tip__info">
                                <span class="info"><span class="info__title">Label:</span> Hot Creations</span>
                                <span><span class="info__title">Most popular month:</span> August 2013</span>
                            </p>
                        </div>
                    {/* </li>
                    <li> */}
                        {/* <a href="" title="">Full Intention - Icon</a> */}
                        <div class="tool-tip card">
                            <i class="tool-tip__icon">i</i>
                            <p class="tool-tip__info">
                                <span class="info"><span class="info__title">Label:</span> Rebirth</span>
                                <span><span class="info__title">Most popular month:</span> August 2013</span>
                            </p>
                        </div>
                    {/* </li>
                    <li> */}
                        {/* <a href="" title="">Kenlou - The Bounce</a> */}
                        <div class="tool-tip card">
                            <i class="tool-tip__icon">i</i>
                            <p class="tool-tip__info">
                                <span class="info"><span class="info__title">Label:</span> Strictly Rhythm</span>
                                <span><span class="info__title">Most popular month:</span>  March 2013</span>
                            </p>
                        </div>
                    {/* </li>
                    <li> */}
                        {/* <a href="" title="">Plezier - Like</a> */}
                        <div class="tool-tip card">
                            <i class="tool-tip__icon">i</i>
                            <p class="tool-tip__info">
                                <span class="info"><span class="info__title">Label:</span> Moda Black</span>
                                <span><span class="info__title">Most popular month:</span> August 2013</span>
                            </p>
                        </div>
                    {/* </li>
                    <li> */}
                        {/* <a href="" title="">Kruse &amp; Nuernberg - Off Course (Stefano Ritteri remix)</a> */}
                        <div class="tool-tip card">
                            <i class="tool-tip__icon">i</i>
                            <p class="tool-tip__info">
                                <span class="info"><span class="info__title">Label:</span> Rebirth</span>
                                <span><span class="info__title">Most popular month:</span>  August 2013</span>
                            </p>
                        </div>
                    {/* </li>
                    <li> */}
                        {/* <a href="" title="">Ghost Poet - Cold Win (Lorca Remix)</a> */}
                        <div class="tool-tip card">
                            <i class="tool-tip__icon">i</i>
                            <p class="tool-tip__info">
                                <span class="info"><span class="info__title">Label:</span> Play It Again Sam</span>
                                <span><span class="info__title">Most popular month:</span>  November 2007</span>
                            </p>
                        </div>
                    {/* </li>
                    <li> */}
                        {/* <a href="" title="">Nina Kraviz - Pain In The Ass (Lewis Boardman Greatest Pain In Tha Arse remix)</a> */}
                        <div class="tool-tip card">
                            <i class="tool-tip__icon">i</i>
                            <p class="tool-tip__info">
                                <span class="info"><span class="info__title">Label:</span> Rekids</span>
                                <span><span class="info__title">Most popular month:</span>  March 2013</span>
                            </p>
                        </div>
                    {/* </li>
                    <li> */}
                        {/* <a href="" title="">Brodinski - Gimme Back the Night (Club Mix)</a> */}
                        <div class="tool-tip card">
                            <i class="tool-tip__icon">i</i>
                            <p class="tool-tip__info">
                                <span class="info"><span class="info__title">Label:</span> Bromance</span>
                                <span><span class="info__title">Most popular month:</span>  March 2013</span>
                            </p>
                        </div>
                    {/* </li>
                    <li> */}
                        {/* <a href="" title="">Legitimate Scandal - Fu Gee La</a> */}
                        <div class="tool-tip card">
                            <i class="tool-tip__icon">i</i>
                            <p class="tool-tip__info">
                                <span class="info"><span class="info__title">Label:</span> Guesthouse Music</span>
                                <span><span class="info__title">Most popular month:</span>  March 2013</span>
                            </p>
                        </div>
                    {/* </li>
                </ol> */}
            </article>

        </>
    );
}
export default memo(MangaContainer);