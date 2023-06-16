const input = document.querySelector('input');
		const btn = document.querySelector('.addTask > button');

		btn.addEventListener('click', addList);
		input.addEventListener('keyup', (e)=>{
			(e.keyCode === 8 ? addList(e) : null);
		})


		function addList(e){
			const notCompleted = document.querySelector('.notCompleted');
			const Completed = document.querySelector('.Completed');

			const newLi = document.createElement('li');
			const checkBtn = document.createElement('button');
			const delBtn = document.createElement('button');

			checkBtn.innerHTML = 'DONE';
			delBtn.innerHTML = 'REMOVE';


			if(input.value !==''){
				newLi.textContent = input.value;
				input.value = '';
				notCompleted.appendChild(newLi);
				newLi.appendChild(checkBtn);
				newLi.appendChild(delBtn);
			}

			checkBtn.addEventListener('click', function(){
				const parent = this.parentNode;
				parent.remove();
				Completed.appendChild(parent);
				checkBtn.style.display = 'none';
			});

			delBtn.addEventListener('click', function(){
				const parent = this.parentNode;
				parent.remove();
			});
		}
		const todoContainer=document.getElementById('todos')
		const newLi = document.createElement('li');

		const getTodos=()=>{
		   return fetch('https://dummyjson.com/todos')
			.then(response=>response.json())
			.then(response=>response)
			.catch(error=>error)
		};
		
		const displayTodos = async()=>{
		const todos = await getTodos();
		console.log(todos)
		

		// "id": 1,
		// "todo": "Do something nice for someone I care about",
		// "completed": true,
		// "userId": 26



		todos.todos.map(item=>{
			console.log(item)
			
			let todo = document.createElement('todo')
	
			todo.innerHTML = item.todo;
		
		
			newLi.setAttribute('key',item.id)
			//div.id='key'
			newLi.setAttribute('class','todo')
			todoContainer.appendChild(newLi)
		
		});
		}
		console.log(displayTodos())







		