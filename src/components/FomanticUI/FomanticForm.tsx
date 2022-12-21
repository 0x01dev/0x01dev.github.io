import React, {useEffect, useState} from "react";

// https://github.com/annexare/Countries
import {countries} from 'countries-list';

interface FomanticFormProps {
    dark?: boolean,
    toggleDarkMode?: (value?: boolean) => void,
}

const FomanticForm: React.FC<FomanticFormProps> = (props) => {

    const [dark, setDark] = useState<boolean | undefined>(props.dark);

    const [checkboxChecked, setCheckboxChecked] = useState<boolean>(false);
    const checkBoxHandler = () => {
        setCheckboxChecked(!checkboxChecked);
        setData({
            ...data,
            'sendInfoToEmail': !checkboxChecked,
        })
    }

    const [showOrder, setShowOrder] = useState<boolean>(false);


    const [data, setData] = useState<object>({});
    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e);
        const input = e.target.value;
        const name = e.target.name; // 'name' from input
        setData({
            ...data,
            [name]: input
        });
    }
    const printStateToConsoleHandler = () => {
        console.log(data);
    }

    useEffect(() => {
            setDark(props.dark);
        }, [props.dark]
    );

    useEffect(() => {

    }, [dark]);

    useEffect(() => {
        // $('.ui.checkbox').checkbox();

    }, []);


    // @ts-ignore
    // @ts-ignore
    return (
        <>
            {/*<div className={`ui ${(props.dark ? 'inverted' : null)} segment`}>*/}

            <h2 className={`ui ${(props.dark ? 'inverted' : null)} header`}>Fomantic UI form example</h2>
            <form className={`ui ${(props.dark ? 'inverted' : null)} form`}>

                <h4 className={`ui ${(props.dark ? 'inverted' : null)} dividing header`}>User Name</h4>
                <div className="field">
                    <label>Full Name</label>
                    {/*The field expects the value to be a person's full name.
                    Using "name" rather than breaking the name down into its components is generally preferred
                    because it avoids dealing with the wide diversity of human names and how they are structured;*/}
                    <input type="text"
                           name={'fullName'}
                           autoComplete={'name'}
                           onChange={inputHandler}
                           placeholder="John Doe"/>
                </div>

                <div className="field">

                    <label>Billing Address</label>

                    <div className="fields">

                        <div className="ten wide field">
                            {/*"street-address"
                            A street address. This can be multiple lines of text, and should fully identify the location
                            of the address within its second administrative level (typically a city or town),
                            but should not include the city name, ZIP or postal code, or country name.*/}
                            <input type="text"
                                   onChange={(e) => {
                                       setData({...data, fullName: e.target.value})
                                   }}
                                   autoComplete={'street-address'}
                                   placeholder="Street Address"/>
                        </div>

                        <div className="four wide field">
                            {/* "address-level2"
                            The second administrative level, in addresses with at least two of them.
                            In countries with two administrative levels, this would typically be
                            the city, town, village, or other locality in which the address is located.*/}
                            <input type="text" autoComplete={'address-level2'} placeholder="City"/>
                        </div>


                        <div className="four wide field">
                            <input type="text" autoComplete={'postal-code'} placeholder="Postal/ZIP code"/>
                        </div>

                    </div>
                </div>

                <div className="two fields">

                    <div className="field">
                        <label>Country</label>
                        <select autoComplete={'country'}
                                className={`ui ${(props.dark ? 'inverted' : null)} fluid dropdown`}>
                            <option value="">Country</option>
                            {Object.entries(countries).map(([countryCode, country], index) => (
                                <option key={countryCode + 'option'} value={countryCode}>
                                    {country.emoji}{country.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="field">
                        <label>State</label>
                        <select className={`ui ${(props.dark ? 'inverted' : null)} fluid dropdown`}>
                            <option value="">State</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                    </div>

                </div>

                <h4 className={`ui ${(props.dark ? 'inverted' : null)} dividing header`}>Billing Information</h4>

                <div className="field">
                    <label>Card Type</label>
                    <div className={`ui ${(props.dark ? 'inverted' : null)} selection dropdown`}>

                        <input type="hidden" name="card[type]"/>

                        <div className="default text">Type</div>

                        <i className="dropdown icon"></i>

                        <div className="menu">
                            <div className="item" data-value="visa">
                                <i className="visa icon"></i>
                                Visa
                            </div>
                            <div className="item" data-value="amex">
                                <i className="amex icon"></i>
                                American Express
                            </div>
                            <div className="item" data-value="discover">
                                <i className="discover icon"></i>
                                Discover
                            </div>
                        </div>
                    </div>
                </div>

                <div className="fields">
                    <div className="seven wide field">
                        <label>Card Number</label>
                        <input type="text" name="card[number]" maxLength={16} placeholder="Card #"/>
                    </div>

                    <div className="three wide field">
                        <label>CVC</label>
                        <input type="text" name="card[cvc]" maxLength={3} placeholder="CVC"/>
                    </div>
                    <div className="six wide field">
                        <label>Expiration</label>
                        <div className="fields">
                            <div className="eight wide field">
                                <select className={`ui ${(props.dark ? 'inverted' : null)} fluid search dropdown`}
                                        name="card[expire-month]">
                                    <option value="">Month</option>
                                    <option value="1">January</option>
                                    <option value="2">February</option>
                                    <option value="3">March</option>
                                    <option value="4">April</option>
                                    <option value="5">May</option>
                                    <option value="6">June</option>
                                    <option value="7">July</option>
                                    <option value="8">August</option>
                                    <option value="9">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                            </div>
                            <div className="field">
                                <input type="text"
                                       name="card[expire-year]"
                                       maxLength={4}
                                       placeholder="Year"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`ui ${(props.dark ? 'inverted' : null)} segment`}>
                    <div className="field">
                        <div className={`ui ${(props.dark ? 'inverted' : 'secondary')} toggle checkbox`}
                             onClick={() => {
                                 checkBoxHandler();
                             }}
                        >
                            <input type="checkbox"
                                   tabIndex={0}
                                   name="sendInfoToEmail"
                                   className="hidden"
                                   checked={checkboxChecked}
                                   onChange={(e) => {
                                       checkBoxHandler();
                                   }}
                            />
                            <label>Send info to email</label>

                        </div>
                    </div>
                </div>

                <div id={'showOrderButton'}
                     className={`ui ${(props.dark ? 'inverted' : null)} black button`}
                    // tabIndex={0}
                     onClick={(e) => {
                         setShowOrder(true)
                     }}
                >
                    Submit Order
                </div>
                {/*<div className={`ui ${(props.dark ? 'inverted' : null)} button`}>TEST</div>*/}
                {' '}
                <div className={`ui ${(props.dark ? 'inverted' : null)} blue button`}
                    // tabIndex={0}
                     onClick={printStateToConsoleHandler}
                >
                    Print state to console
                </div>
            </form>
            {/*</div>*/}

            {showOrder ?
                <div className={`ui ${(props.dark ? 'inverted' : null)} segment`}>

                    <h4 className={`ui ${(props.dark ? 'inverted' : null)} dividing header`}>Entered Data:</h4>

                    {Object.entries(data).map(([key, value], index) =>
                            // value ?
                            <div key={'show' + key}>
                                {key}
                                {':'}
                                {value.toString()}
                            </div>
                        // : null
                    )}
                    <br/>
                    <div id={'clearOrderButton'}
                         className={`ui ${(props.dark ? 'inverted' : null)} black button`}
                        // tabIndex={0}
                         onClick={() => {
                             setShowOrder(false);
                             // setData({})
                         }}
                    >
                        Clear
                    </div>
                </div>
                : null
            }

        </>
    );
};

export default FomanticForm;