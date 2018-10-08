// import * as React from 'react';
// import * as enzyme from 'enzyme';
// import Hello from './Hello';


// it(' render the correct  text with explicit enthusiam of 1', () => {
//   const hello = enzyme.shallow(<Hello languageName="marvis" enthusiasmLevel={1} />);
//   expect(hello.find('.greeting').text()).toEqual('Hello marvis!')
// });

// it('it render the correct text with an explicit enthusiasm level of 5', () => {
//   const hello = enzyme.shallow(<Hello languageName="marvis" enthusiasmLevel={5}/>);
//   expect(hello.find('.greeting').text()).toEqual('Hello marvis!!!!!');
// });

// it(' throws  when enthusiasm level is negative', () => {
//   expect(() => {
//     enzyme.shallow(<Hello languageName="marvis" enthusiasmLevel={-1} />)
//   }).toThrow();
// });
// it(' throws when enthusiasm level is 0', () => {
//   expect(() => {
//     enzyme.shallow(<Hello languageName="marvis" enthusiasmLevel={0} />)
//   }).toThrow();
// });