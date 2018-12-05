import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Top from '../../plantilla/top';
import Bot from '../../plantilla/bot';
import Fondo from '../../componentes/fondo';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';

import lander1 from '../../recursos/lander1.png';
import lander2 from '../../recursos/lander2.png';
import lander3 from '../../recursos/lander3.png';

const styles = {
  main: {
    display: 'flex',
    height: '100vh',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '0 1.5em'
  }
};

const BienvenidoPagina = props => {
  return (
    <div>
      <Helmet>
        <title>SINTRIGA</title>
      </Helmet>
      <Top propEstilo={{ background: 'transparent' }} propTitulo='' />
      <Fondo imagenes={[lander1, lander2, lander3]}>
      <div className={props.classes.main}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column'
            }}
            >
            {}
          </div>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center'
            }}
            >
            <Button
              component={Link}
              style={{
                color: '#000',
                backgroundColor: '#DBD65C',
                borderRadius: '20px',
                fontWeight: '600'
              }}
              to='/series'
              variant='outlined'
              >
              Todas tus Series Aquí
            </Button>
          </div>
        </div>
        <section>
          <div>lorem</div>
          <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium eligendi repellendus voluptate ea, ut excepturi, dolorem quidem molestiae itaque minima nisi. Aspernatur similique explicabo eveniet. Tempora eaque unde voluptatibus ad?
          Reiciendis ipsa quasi excepturi corrupti in voluptatem esse optio explicabo, voluptatum est quo adipisci ex, deleniti iure accusantium commodi velit necessitatibus natus. Vel eius doloribus ab accusantium earum quo quasi!
          Similique adipisci vel rem dolore culpa repellendus voluptatum sed, eaque temporibus laborum harum quisquam eum dolores tempora, magni molestiae nostrum consequuntur fugiat ea recusandae accusamus consectetur molestias non? Quo, possimus!
          Cupiditate non laborum minima. Explicabo autem velit consectetur ipsum vel exercitationem, neque earum recusandae aperiam ut libero fugiat incidunt labore rerum dignissimos. Aliquid dolorem nostrum adipisci distinctio temporibus laudantium architecto?
          Omnis sed quis, sint recusandae veritatis totam iste dolores dolorem assumenda a rem blanditiis. Voluptates dolor suscipit repellat. Ullam fuga ipsum inventore necessitatibus. Accusamus corrupti fugit enim quis nesciunt esse.
          Fuga nobis facilis laborum sint vero reiciendis atque praesentium, dicta enim iste omnis molestiae eos! Sapiente alias, omnis cumque consequatur accusantium assumenda. Ipsa vero ullam enim iste alias ducimus praesentium?
          Enim neque aut porro voluptatibus, officiis, doloremque, laudantium sit a vitae dicta iure nobis! Aspernatur natus autem nihil accusantium aut veniam debitis. Omnis, porro qui? Reprehenderit possimus hic aliquam corrupti?
          Et ratione mollitia, pariatur quae aspernatur ad quasi alias aliquam rem error soluta odio sapiente perferendis animi architecto laboriosam dolores ut? Id inventore mollitia quam omnis unde accusantium facilis corrupti.</div>
        </section>
      </Fondo>
      <Bot />
    </div>
  );
};

/*             <Typography
              style={{
                fontFamily: 'VT323',
                fontSize: '3em',
                letterSpacing: '2px',
                color: '#DBD65C'
              }}
              variant='display3'
              >
              Series de Intriga
            </Typography> */

BienvenidoPagina.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BienvenidoPagina);
