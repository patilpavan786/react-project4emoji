import { useState, useEffect } from 'react';
import React from 'react';
import style from './EmojiSearch.module.css';
import Input from '../Atom/Input';
import Button from '../Atom/Button';
import Navbar from './Navbar';

export default function EmojiSearch() {
  const [search, setSearch] = useState('');
  const [emoji, setEmoji] = useState([]);
  async function CallApi() {
    const response = await fetch(
      'https://emoji-api.com/emojis?access_key=81065a650396db16531a770cc3a3c62f7841ad19'
    );
    const data = await response.json();
    setEmoji(data);
    console.log(data);
  }
  useEffect(() => {
    CallApi();
  }, []);

  function handleClick() {
    alert('show the copy😁🐨😎🤩');
  }
  function handleButton() {
    alert('sort smiling');

    let smilingface = emoji.filter((x) => x.slug.includes('smiling'));
    console.log(smilingface);
    setEmoji(smilingface);
  }
  function handlebutton1() {
    alert('show all person');
    let person1 = emoji.filter((x) => x.slug.includes('grinning'));
    console.log(person1);
    setEmoji(person1);
  }
  function handlebutton2() {
    alert('show all sad');
    let sad1 = emoji.filter((x) => x.slug.includes('person'));
    console.log(sad1);
    setEmoji(sad1);
  }
  function handlebutton3() {
    alert('show taxi');
    let taxi1 = emoji.filter((x) => x.slug.includes('heart'));
    console.log(taxi1);
    setEmoji(taxi1);
  }

  return (
    <>
      <div className={style.container2}>
        <Navbar />

        <div className={style.mainContainer}>
          <div className={style.menu}>
            <p className={style.heading}>🐨EmojiSearch🐨</p>
            <p className={style.search}>A simple search-Emoji with React</p>

            <Input
              className={style.input}
              type="name"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className={style.cardContainer}>
              <span className={style.ButtonsContainer}>
                <Button
                  className={style.smiling}
                  onClick={handleButton}
                  text="Smiling"
                />
                <Button
                  className={style.smiling}
                  onClick={handlebutton1}
                  text="Grinning"
                />
                <Button
                  className={style.smiling}
                  onClick={handlebutton2}
                  text="Person"
                />
                <Button
                  className={style.smiling}
                  onClick={handlebutton3}
                  text="Heart"
                />
              </span>

              {emoji
                .filter((element) =>
                  element.slug.toLowerCase().includes(search.toLowerCase())
                )
                .map((element, index) => (
                  <div className={style.mapborder} key={index}>
                    <div className={style.EmojiListContainer}>
                      <p className={style.character} onClick={handleClick}>
                        {element.character}
                      </p>
                      <p className={style.slug}>{element.slug}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
