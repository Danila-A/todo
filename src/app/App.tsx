import { MainProvider } from './provider/MainProvider';
import { Header } from '../pages/header';
import { TodoListWithImagePlaceholder } from '../pages/todoList';
import { PageWrapper } from '../pages/PageWrapper';
import { AddTodoForm } from '../widgets/addTodoForm';

export const App = () => {
    return (
        <MainProvider>
            <PageWrapper>
                <Header />
                <TodoListWithImagePlaceholder />
                <AddTodoForm />
            </PageWrapper>
        </MainProvider>
    );
}
