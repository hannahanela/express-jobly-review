\echo 'Delete and recreate ex_jobly db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE ex_jobly;
CREATE DATABASE ex_jobly;
\connect ex_jobly

\i jobly-schema.sql
\i jobly-seed.sql

\echo 'Delete and recreate ex_jobly_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE ex_jobly_test;
CREATE DATABASE ex_jobly_test;
\connect ex_jobly_test

\i jobly-schema.sql
