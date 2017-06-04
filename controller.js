function todoController($scope) {
 
    $scope.todos = [
        {todoItem: 'walk the dog', done: false},
        {todoItem: 'feed the cat', done: false}
    ];
     
    $scope.returnTotalTodos = function () {
        console.log ('returnTotalTodos executes');
        return $scope.todos.length;
    }
 
 
    $scope.addNewTodo = function () {
         console.log ('addNewTodo executes');
                 var nothing = $scope.todos.length;
                 var nothing2  = nothing;
        if ($scope.newTodoText.length){
            $scope.todos.push ( {todoItem: $scope.newTodoText , done: false});
            $scope.newTodoText = '';
        }
 
    
    }
 
    $scope.clearFinishedTodos = function () {
        console.log ('clearFinishedTodos executes');
        $scope.todos = _.filter($scope.todos, function (todo) {return !todo.done})
    }
 
}