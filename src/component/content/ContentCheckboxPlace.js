function ContentCheckboxPlace({ placeName, check }) {
    return (
        <>
            <div className="content_div_checkbox flex">
                <input className="content_checkbox_place" type="checkbox"></input>
                <p className="content_checkbox_text">{placeName}</p>
            </div>
        </>
    );
}

export default ContentCheckboxPlace;