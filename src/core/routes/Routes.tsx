import React from 'react';
import { Layout } from '../layout';
import { Route } from 'react-router';
import { RoutePaths } from '../../const/routes';
import { TodoPageContainer  } from '../todo-page';

export const Routes: React.FC = () => {
    return (
        <Layout>
            <Route exact path={RoutePaths.ROOT} component={TodoPageContainer}/>            
        </Layout>
    );
}