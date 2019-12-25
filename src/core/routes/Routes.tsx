import React from 'react';
import { Layout } from '../layout';
import { Route } from 'react-router';
import { RoutePaths } from '../../const/routes';
import { TodoDetail } from '../todo-detail';
import { TodoListContainer  } from '../todo-list';

export const Routes: React.FC = () => {
    return (
        <Layout>
            <Route exact path={RoutePaths.ROOT} component={TodoListContainer}/>
            <Route exact path={RoutePaths.TODO_DETAIL} component={TodoDetail}/>
        </Layout>
    );
}