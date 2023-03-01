import React, { useState } from "react";
import "../styles/info.css";

const Info = () => {
	const[toggleState, setToggleState] = useState(0);

	const toggleTab = (index) => {
		setToggleState(index);
	}

	return (
		<section className="info section" id="info">
			<h2 className="section-title">Informations</h2>
			<span className="section-subtitle">All you need to know</span>

			<div className="info__container container grid">
				<div className="info__content">
					<div>
						<i className="uil uil-archway info__icon"></i>
						<h3 className="info__title">Ślub</h3>
					</div>

					<span className="info__button" onClick={() => toggleTab(1)}>
						View More
						<i className="uil uil-arrow-right info_button-icon"></i>
					</span>

					<div className={toggleState == 1 ? "info__modal active-modal" : "info__modal"}>
						<div className="info__modal-content">
							<i className="uil uil-times info__modal-close" onClick={() => toggleTab(0)}></i>
							<h3 className="info__modal-title">Ślub</h3>
							<p className="info__modal-description">Ślub to najwazniejsza część, wcale nie impreza. 
							Wybór kościoła ne jest przypadkowy : Gorka, rodzice . bla bla </p>
							<ul className="info__modal-infos grid">

								<li className="info__modal-info">
									<i className="uil uil-map-marker info__modal-icon"></i>
									<p className="info__modal-text">Bazylika św Mikołaja<br/>ul.Świętojańska, Gdańsk </p>
								</li>

								<li className="info__modal-info">
									<i className="uil uil-clock info__modal-icon"></i>
									<p className="info__modal-text">9 Września<br/>Sobota | 16:30</p>
								</li>

								<li className="info__modal-info">
									<i className="uil uil-info-circle info__modal-icon"></i>
									<p className="info__modal-text">w kościele będzie zimno</p>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="info__content">
					<div>
						<i className="uil uil-glass-martini-alt info__icon"></i>
						<h3 className="info__title">Wesele</h3>
					</div>

					<span className="info__button" onClick={() => toggleTab(2)}>
						View More
						<i className="uil uil-arrow-right info_button-icon"></i>
					</span>

					<div className={toggleState == 2 ? "info__modal active-modal" : "info__modal"}>
						<div className="info__modal-content">
							<i className="uil uil-times info__modal-close" onClick={() => toggleTab(0)}></i>
							<h3 className="info__modal-title">Wesele</h3>
							<p className="info__modal-description">Na weselu będzie dobra zabawa bla bla bla</p>
							<ul className="info__modal-infos grid">

								<li className="info__modal-info">
									<i className="uil uil-map-marker info__modal-icon"></i>
									<p className="info__modal-text">Willa Eva<br/>ul.JAkaś tam, Gdańsk </p>
								</li>

								<li className="info__modal-info">
									<i className="uil uil-clock info__modal-icon"></i>
									<p className="info__modal-text">9 Września<br/>Sobota | 18:30?</p>
								</li>

								<li className="info__modal-info">
									<i className="uil uil-info-circle info__modal-icon"></i>
									<p className="info__modal-text">jest darmowy parking</p>
								</li>

								<li className="info__modal-info">
									<i className="uil uil-info-circle info__modal-icon"></i>
									<p className="info__modal-text">można zarezerwować nocleg</p>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="info__content">
					<div>
						<i className="uil uil-fire info__icon"></i>
						<h3 className="info__title">Ognisko</h3>
					</div>

					<span className="info__button" onClick={() => toggleTab(3)}>
						View More
						<i className="uil uil-arrow-right info_button-icon"></i>
					</span>

					<div className= {toggleState == 3 ? "info__modal active-modal" : "info__modal"}>
						<div className="info__modal-content">
							<i className="uil uil-times info__modal-close" onClick={() => toggleTab(0)}></i>
							<h3 className="info__modal-title">Ognisko</h3>
							<p className="info__modal-description">Będzie weselne ognisko dla wszystkich naszych ziomeczków, 
							którzy chcą świętować z nami</p>
							<ul className="info__modal-infos grid">

								<li className="info__modal-info">
									<i className="uil uil-map-marker info__modal-icon"></i>
									<p className="info__modal-text">U Grzesia<br/>ul.Leśna Polana, Sopot </p>
								</li>

								<li className="info__modal-info">
									<i className="uil uil-clock info__modal-icon"></i>
									<p className="info__modal-text">16 Września<br/>Sobota | 18:30</p>
								</li>

								<li className="info__modal-info">
									<i className="uil uil-info-circle info__modal-icon"></i>
									<p className="info__modal-text">będzie wydarzenie na fb</p>
								</li>

								<li className="info__modal-info">
									<i className="uil uil-info-circle info__modal-icon"></i>
									<p className="info__modal-text">przynoście jedzenie i alko</p>
								</li>
							</ul>
						</div>
					</div>
				</div>

			</div>
		</section>
	)
}

export default Info