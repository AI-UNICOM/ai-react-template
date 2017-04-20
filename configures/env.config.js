process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
const IS_PRODUCTION = process.env.NODE_ENV === 'pro';
const IS_TEST = process.env.NODE_ENV === 'test';
const IS_DEBUG=!IS_PRODUCTION

module.exports={
    IS_PRODUCTION,
    IS_TEST,
    IS_DEBUG
}