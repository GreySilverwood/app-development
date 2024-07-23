import React, {useState} from "react";

const Home = function(){
    
    //collecting multiple states
    const [inputdata, setInputdata] = useState({})

    //function to collect the changes of each input data
    const handledata = function(e){
        const name = e.target.name
        const value = e.target.value
        setInputdata(values => ({...values, [name]:value})) //spread
    }

    //submit function
    const submitform = function(e){
        e.preventDefault()
        alert(`Name: ${inputdata.fullname} \nAge: ${inputdata.age} \nGender: ${inputdata.gender} \nSuggestions: ${inputdata.usercomments}`)
    }

    return(
        <>
            <header className='header'>
                <h1 className='headertitle'>Home</h1>
            </header>

            <div className='containerblock'>
                <aside className='leftsideD'>
                    <p>Disclaimer: All books listed here have been priced at their <strong>paperback</strong> copies. NOT hard copies. If you are expecting something more, please visit Amazon. Books that have been listed here are book for general reading and as for personal recommendations... They are more books to exercise the brain. If you would like to give it a try, I welcome it.</p>
                </aside>

                <div className='rightsideR'>
                    <p>Text goes here. Filler text. Text goes here. Filler text. Text goes here. Filler text. Text goes here. Filler text. Text goes here. Filler text. </p>
                </div>
            </div>

            <section className='containerblock'>
                <h1 className='title'>Feedback</h1>
            </section>

            <section className='containerblock'>
                <div>
                    <p>Read a book and you want to tell us how you felt about it? Feel free to do so!</p>
                </div>
            </section>

            <section>
                <form className="signupform" onSubmit={submitform}>
                    <fieldset>
                        <legend>Feedback Form</legend>

                        <label for="name">Enter Name: </label>
                        <input 
                            id="name" 
                            type="text" 
                            placeholder="Type your name..."
                            name="fullname"
                            value={inputdata.fullname}
                            onChange={handledata}
                        />

                        <div className="formcontrol">
                            <label for="age">Enter an age: </label>
                            <input
                                id="age"
                                type="number"
                                placeholder="Enter your age: "
                                name="age"
                                min={1}
                                max={99}
                                value = {inputdata.age}
                                onChange={handledata}
                            />
                        </div>

            <div className="formcontrol">
              <label for="selectgender">Select Gender: </label>
              <select 
                id="selectgender"
                value = {inputdata.gender}
                name="gender"
                onChange={handledata}
                placeholder="Gender Selector..."
              >
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="formcontrol">
              <label for="comments">Suggestions?</label>
              <textarea
                id="comments"
                placeholder="Max 1000 characters"
                maxLength={1000}
                name="usercomments"
                value={inputdata.usercomments}
                onChange={handledata}
              />
            </div>

            <div>
              <button type="submit">Submit</button>
            </div>
          </fieldset>
        </form>
      </section>
        </>
    )
}

export default Home