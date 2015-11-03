FlowRouter.route('/', {
  name: 'home',
  action: function() {
    ReactLayout.render(AppLayout, {
      content: <Home />
    });
  }
});

FlowRouter.route('/dashboard', {
  name: 'dashboard',
  action: function() {
    ReactLayout.render(AppLayout, {
      content: <Dashboard />
    });
  }
});

FlowRouter.notFound = {
  action: function() {
    ReactLayout.render(AppLayout, {
      content: <PageNotFound />
    });
  }
};