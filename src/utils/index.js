import getDeepValue from './getDeepValue'
import graphql from './graphql'
import hyphen from './hyphen'
import pluralize from './pluralize'
import queryString from './queryString'
import request from './request'
import singularize from './singularize'
import upperFirst from './upperFirst'
import { createPageParams, createSortParams, createInputs } from './makeGraphql'
import lowerCamelCaseToHyphen from './lowerCamelCaseToHyphen'
import {takePicture, openAlbum} from './cordovaCamera'

const {...makeGraphql}={ createPageParams, createSortParams, createInputs }
const {...cordovaCamera}={takePicture, openAlbum}

export {
    getDeepValue,
    graphql,
    hyphen,
    pluralize,
    queryString,
    request,
    singularize,
    upperFirst,
    makeGraphql,
    lowerCamelCaseToHyphen,
    cordovaCamera
}