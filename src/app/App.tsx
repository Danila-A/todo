import { MainProvider } from './provider/MainProvider';
import { Header } from '../pages/header';
import { TodoListWithImagePlaceholder } from '../pages/todoList';
import { AddTodoForm } from '../widgets/addTodoForm';
import { PageWrapper } from '../pages/PageWrapper';

export const App = () => {
    return (
        <MainProvider>
            <PageWrapper>
                <Header/>
                <TodoListWithImagePlaceholder />
                <AddTodoForm />
            </PageWrapper>
        </MainProvider>
    );
}
