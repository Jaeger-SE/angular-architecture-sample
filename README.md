# Angular architecture sample

This application is a basic setup of an Angular project that use the `facade` and `sandbox` pattern.

# Some explanations

## Project structure

### Application module

Next to a routing module using lazy loading (`loadChildren`). It calls the required forRoot functions of imported modules.

#### Tips

Do not import the ApplicationSharedModule in the Application module if not required to ease dependency graph.

### Application Shared module

It calls the required forRoot functions of imported modules. It also imports its children modules

#### Tips

Directly import all children modules from the shared module will make the work with shared module easier. By just importing the bulky shared module you will have all the required ressources you need.
Never use IoC using the shared module providers. Let do it in modules that will use them.
If you need a global service (like a notification service, provide it in the forRoot function of the application shared-module)

### Pipes

Nothing to declare here

### Utils

Contains all non-angular-related elements. Those are pure typescript object and often works well with whatever frontend frameworks.

#### Tips

If you need to reference something linked to angular, create a specific module for it and look at shared.minor_module references.

### Application Minor modules

Contains any utils related to Angular. E.g: Modals, any wrapper on angular services like an httpServiceWrappern, toastr, form helpers, route guards, http interceptors, etc ...

#### Tips

Never use IoC using the shared module providers. Let do it in modules that will use them. If you need a global service (like a notification service, use the forRoot synthax to provide it)

### Major module

Imports its children Minor modules. Next to a routing module but not using lazy loading. Map a path to a specific minor module component. It calls the required forRoot functions of imported modules.
It may configure IoC using providers. It will also be the module that contains the facade (api service, `sandbox` and models)

#### Tips

For code clarity, avoid unused module import to ease dependency graph

### Minor module

Contains application components. Those are UI-only components, they only managed ui interaction and bound their actions to a facade method. All data required to built those screen are fetched from a public property from the `sandbox`.
For some specific use case, you may exports some components for an external usage ability.
It may also reference other minor module from the same Major module. But take care about circular dependencies, if so, create a third minor module that will be used by both other modules.
You can create a Shared module into a Major module to regroup reusable/generic components. Avoid putting feature-specific components there (a minor module may fit better)

### Facade

This section contains: *This section documentation is still not done yet*

#### Application domain

Models interfaces exposed by sandboxs or api services from the module
#### Sandboxes

#### Api services

#### Others
* A SignalR hub connector
* Validators functions for facade models
* Business-logic services


<!-- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
 -->
