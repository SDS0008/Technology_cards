
import '../src/components/CardItem/index.css';

import './App.css'

import CardItem from './components/CardItem';


const cardsList = [

  {
    id: 1,
    title: 'Data Scientist',
    description: 'Data scientist ghj ghnjkm dfghjk dfghjkjhgf dfghjk 0',
    imgUrl: 'https://tse1.mm.bing.net/th?id=OIP.8saFYrJpmYxzt6g2e_dOZwHaE8&pid=Api&P=0&h=220',
    className: ' cards card-1',
  },

  {
    id: 2,
    title: 'IOT Developer',
    description: ' IOT Developer ghj ghnjkm dfghjk dfghjkjhgf dfghjk 0',
    imgUrl: 'https://tse1.mm.bing.net/th?id=OIP.39biKD21YoKjeFfpRcVITwHaHa&pid=Api&P=0&h=220',
    className: ' cards card-2',
  },

  {
    id: 3,
    title: 'Vr DEV',
    description: 'Vr DEV ghj ghnjkm dfghjk dfghjkjhgf dfghjk 0',
    imgUrl: 'https://tse1.mm.bing.net/th?id=OIP.pbW6WaD_cpaaRGz_dCk5GAHaEL&pid=Api&P=0&h=220',
    className: 'cards card-3',
  },

  {
    id: 4,
    title: 'HL Engineering',
    description: 'HL Engineering ghj ghnjkm dfghjk dfghjkjhgf dfghjk 0',
    imgUrl: 'https://tse4.mm.bing.net/th?id=OIP.THTlx8NYjWG_Q8VvfDKRqQHaDL&pid=Api&P=0&h=220',
    className: ' cards card-4',
  },



]

const App = () => {
  return (
    <div className="technologies-bg-con">
      <h1 className="technologies-heading">
        Learn 4.0 technologies
      </h1>

      <p className="technologies-description">

        Get trained by alumiof IITS dxcfvgbhmk ghvhbl gl fghcsdbsdjbj bfhadajhh jjhsdhljfahj gj nkm.

      </p>

      <ul className='technologies-card-con'>

        { cardsList.map(eachObj => (
          <CardItem sourceObj={ eachObj } key={ eachObj.id } />
        )) }
      </ul>

    </div>
  );
}

export default App;
