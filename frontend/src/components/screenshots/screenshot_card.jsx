import {Button} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import { propTypesSelected } from '@material-tailwind/react/types/components/select';

function BasicExample(props) {

    let League = props.League;
    let matchno = props.matchno;
    let imgsrc = props.imgsrc
    let des = props.des
    console.log(imgsrc)

  return (
    // <div className='mt-4'>
    <Card className="mt-4 border-2 rounded-3xl" style={{ width: '30vw'}} >
      <Card.Img variant="top" src={imgsrc} style={{height:'38vh'}} />
      <Card.Body>
        <div className="font-bold md:text-lg text-sm">{League}, Match No. {matchno}</div>
        <Card.Text className='text-sm'>
          {des}
        </Card.Text>
      </Card.Body>
    </Card>
    // </div>
  );

}

export default BasicExample;