import './enzyme.config.js';
import React from 'react';
import {shallow} from 'enzyme';

import About from '../src/components/About/About';
import {KEVIN_BIO, APP_EXPLANATION} from '../src/components/Constants';
import {simulateOnClick} from "./buttonClick";

const about = shallow(<About />);

function testBioChange() {
    let initialBioValue = about.state().bio;
    expect(initialBioValue).toEqual(APP_EXPLANATION);

    testBioAfterClick(0, KEVIN_BIO);
    testBioAfterClick(0, APP_EXPLANATION);
    testBioAfterClick(1, KELLYN_BIO);
    testBioAfterClick(3, APP_EXPLANATION);
}

function testBioAfterClick(bioIndex, bioText) {
    simulateOnClick(about.find('Card').at(bioIndex), about);
    let clickToggleValue = about.state().bio;
    expect(clickToggleValue).toEqual(bioText);
}

test("Testing About's Bio Buttons", testBioChange);