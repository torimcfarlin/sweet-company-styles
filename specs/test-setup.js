import chai from 'chai';
// import chaiEnzyme from 'chai-enzyme';
// import sinonChai from 'sinon-chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const notNodeModules = (file) => file.indexOf('node_modules') === -1;

require('babel-core/register')({
  only: (file) => file.match(/node_modules\/react/) || notNodeModules(file),
  extensions: ['.es6', '.es', '.jsx', '.js'],
});

require('react-native-mock/mock');

// chai.use(chaiEnzyme());
// chai.use(sinonChai);
