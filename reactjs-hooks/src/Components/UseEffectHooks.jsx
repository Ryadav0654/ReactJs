import React, {useEffect, useState } from 'react'

function UseEffectHooks() {
    const [Quotes, setQuotes] = useState([]);
       
    useEffect(() => {
        // define getData function to fetch the data
        const getData = async () => {
            try{
                const response = await fetch('https://dummyjson.com/quotes ' );
            const data = await response.json();
            console.log(data.quotes);
            // set the quotes
            setQuotes(data.quotes)
            }catch(err){
                console.log(err);
            }
            
    }
    // call the getdata function
    getData();
               
    }, []);
        
        

  return (
    <div style={styles.container}>
            {Quotes.map((quote, id) => (
                <div key={id} style={styles.quoteBox}>
                    <p style={styles.quoteText}>
                        <span style={styles.id}>{id} - </span>{quote.quote}
                    </p>
                    <p style={styles.author}> <i>Author- {quote.author}</i> </p>
                </div>
            ))}
        </div>
  )
}

const styles = {
    container: {
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#f8f0f4',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    },
    quoteBox: {
        padding: '15px',
        marginBottom: '10px',
        borderLeft: '4px solid #007BFF',
        backgroundColor: '#ffffff',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
    },
    quoteText: {
        fontSize: '16px',
        lineHeight: '1.5',
        color: '#333'
    },
    id: {
        fontWeight: 'bold',
        color: '#007BFF'
    },
    author: {
        fontWeight: '700',    
        fontSize: '16px',
        color: '#000'
    },
    
};


export default UseEffectHooks